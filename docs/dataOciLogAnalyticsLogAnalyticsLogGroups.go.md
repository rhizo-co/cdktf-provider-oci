# `dataOciLogAnalyticsLogAnalyticsLogGroups` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsLogGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroups <a name="DataOciLogAnalyticsLogAnalyticsLogGroups" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups oci_log_analytics_log_analytics_log_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.NewDataOciLogAnalyticsLogAnalyticsLogGroups(scope Construct, id *string, config DataOciLogAnalyticsLogAnalyticsLogGroupsConfig) DataOciLogAnalyticsLogAnalyticsLogGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig">DataOciLogAnalyticsLogAnalyticsLogGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig">DataOciLogAnalyticsLogAnalyticsLogGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsLogGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.DataOciLogAnalyticsLogAnalyticsLogGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.DataOciLogAnalyticsLogAnalyticsLogGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.DataOciLogAnalyticsLogAnalyticsLogGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.DataOciLogAnalyticsLogAnalyticsLogGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsLogGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsLogGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLogAnalyticsLogAnalyticsLogGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsLogGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList">DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.logAnalyticsLogGroupSummaryCollection">LogAnalyticsLogGroupSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.filter"></a>

```go
func Filter() DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList">DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList</a>

---

##### `LogAnalyticsLogGroupSummaryCollection`<sup>Required</sup> <a name="LogAnalyticsLogGroupSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.logAnalyticsLogGroupSummaryCollection"></a>

```go
func LogAnalyticsLogGroupSummaryCollection() DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroupsConfig <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

&dataociloganalyticsloganalyticsloggroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Namespace: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#compartment_id DataOciLogAnalyticsLogAnalyticsLogGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#namespace DataOciLogAnalyticsLogAnalyticsLogGroups#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#display_name DataOciLogAnalyticsLogAnalyticsLogGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#id DataOciLogAnalyticsLogAnalyticsLogGroups#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#compartment_id DataOciLogAnalyticsLogAnalyticsLogGroups#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#namespace DataOciLogAnalyticsLogAnalyticsLogGroups#namespace}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#display_name DataOciLogAnalyticsLogAnalyticsLogGroups#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#filter DataOciLogAnalyticsLogAnalyticsLogGroups#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#id DataOciLogAnalyticsLogAnalyticsLogGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLogAnalyticsLogAnalyticsLogGroupsFilter <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

&dataociloganalyticsloganalyticsloggroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#name DataOciLogAnalyticsLogAnalyticsLogGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#values DataOciLogAnalyticsLogAnalyticsLogGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#regex DataOciLogAnalyticsLogAnalyticsLogGroups#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#name DataOciLogAnalyticsLogAnalyticsLogGroups#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#values DataOciLogAnalyticsLogAnalyticsLogGroups#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#regex DataOciLogAnalyticsLogAnalyticsLogGroups#regex}.

---

### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

&dataociloganalyticsloganalyticsloggroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection {

}
```


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

&dataociloganalyticsloganalyticsloggroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.NewDataOciLogAnalyticsLogAnalyticsLogGroupsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.NewDataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.NewDataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.NewDataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems</a>

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.NewDataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroups"

dataociloganalyticsloganalyticsloggroups.NewDataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection</a>

---




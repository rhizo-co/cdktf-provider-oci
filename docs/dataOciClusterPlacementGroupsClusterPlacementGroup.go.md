# `dataOciClusterPlacementGroupsClusterPlacementGroup` Submodule <a name="`dataOciClusterPlacementGroupsClusterPlacementGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroup <a name="DataOciClusterPlacementGroupsClusterPlacementGroup" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group oci_cluster_placement_groups_cluster_placement_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.NewDataOciClusterPlacementGroupsClusterPlacementGroup(scope Construct, id *string, config DataOciClusterPlacementGroupsClusterPlacementGroupConfig) DataOciClusterPlacementGroupsClusterPlacementGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig">DataOciClusterPlacementGroupsClusterPlacementGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig">DataOciClusterPlacementGroupsClusterPlacementGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.DataOciClusterPlacementGroupsClusterPlacementGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.DataOciClusterPlacementGroupsClusterPlacementGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.DataOciClusterPlacementGroupsClusterPlacementGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.DataOciClusterPlacementGroupsClusterPlacementGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciClusterPlacementGroupsClusterPlacementGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciClusterPlacementGroupsClusterPlacementGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciClusterPlacementGroupsClusterPlacementGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.capabilities">Capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupType">ClusterPlacementGroupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.opcDryRun">OpcDryRun</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.placementInstruction">PlacementInstruction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupIdInput">ClusterPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.capabilities"></a>

```go
func Capabilities() DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList</a>

---

##### `ClusterPlacementGroupType`<sup>Required</sup> <a name="ClusterPlacementGroupType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupType"></a>

```go
func ClusterPlacementGroupType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpcDryRun`<sup>Required</sup> <a name="OpcDryRun" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.opcDryRun"></a>

```go
func OpcDryRun() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PlacementInstruction`<sup>Required</sup> <a name="PlacementInstruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.placementInstruction"></a>

```go
func PlacementInstruction() DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ClusterPlacementGroupIdInput`<sup>Optional</sup> <a name="ClusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupIdInput"></a>

```go
func ClusterPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupId"></a>

```go
func ClusterPlacementGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

&dataociclusterplacementgroupsclusterplacementgroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities {

}
```


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

&dataociclusterplacementgroupsclusterplacementgroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems {

}
```


### DataOciClusterPlacementGroupsClusterPlacementGroupConfig <a name="DataOciClusterPlacementGroupsClusterPlacementGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

&dataociclusterplacementgroupsclusterplacementgroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterPlacementGroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#cluster_placement_group_id DataOciClusterPlacementGroupsClusterPlacementGroup#cluster_placement_group_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.clusterPlacementGroupId"></a>

```go
ClusterPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#cluster_placement_group_id DataOciClusterPlacementGroupsClusterPlacementGroup#cluster_placement_group_id}.

---

### DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction <a name="DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

&dataociclusterplacementgroupsclusterplacementgroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.NewDataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.get"></a>

```go
func Get(index *f64) DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.NewDataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.NewDataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.get"></a>

```go
func Get(index *f64) DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.NewDataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.items"></a>

```go
func Items() DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.NewDataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.get"></a>

```go
func Get(index *f64) DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociclusterplacementgroupsclusterplacementgroup"

dataociclusterplacementgroupsclusterplacementgroup.NewDataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction</a>

---




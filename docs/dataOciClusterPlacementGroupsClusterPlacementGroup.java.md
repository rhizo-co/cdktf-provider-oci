# `dataOciClusterPlacementGroupsClusterPlacementGroup` Submodule <a name="`dataOciClusterPlacementGroupsClusterPlacementGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroup <a name="DataOciClusterPlacementGroupsClusterPlacementGroup" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group oci_cluster_placement_groups_cluster_placement_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroup;

DataOciClusterPlacementGroupsClusterPlacementGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterPlacementGroupId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#cluster_placement_group_id DataOciClusterPlacementGroupsClusterPlacementGroup#cluster_placement_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.Initializer.parameter.clusterPlacementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#cluster_placement_group_id DataOciClusterPlacementGroupsClusterPlacementGroup#cluster_placement_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroup;

DataOciClusterPlacementGroupsClusterPlacementGroup.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroup;

DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroup;

DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroup;

DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciClusterPlacementGroupsClusterPlacementGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciClusterPlacementGroupsClusterPlacementGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciClusterPlacementGroupsClusterPlacementGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupType">clusterPlacementGroupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.opcDryRun">opcDryRun</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.placementInstruction">placementInstruction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupIdInput">clusterPlacementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.capabilities"></a>

```java
public DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList getCapabilities();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList</a>

---

##### `clusterPlacementGroupType`<sup>Required</sup> <a name="clusterPlacementGroupType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupType"></a>

```java
public java.lang.String getClusterPlacementGroupType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `opcDryRun`<sup>Required</sup> <a name="opcDryRun" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.opcDryRun"></a>

```java
public IResolvable getOpcDryRun();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `placementInstruction`<sup>Required</sup> <a name="placementInstruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.placementInstruction"></a>

```java
public DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList getPlacementInstruction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `clusterPlacementGroupIdInput`<sup>Optional</sup> <a name="clusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupIdInput"></a>

```java
public java.lang.String getClusterPlacementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.clusterPlacementGroupId"></a>

```java
public java.lang.String getClusterPlacementGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities;

DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities.builder()
    .build();
```


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems;

DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems.builder()
    .build();
```


### DataOciClusterPlacementGroupsClusterPlacementGroupConfig <a name="DataOciClusterPlacementGroupsClusterPlacementGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupConfig;

DataOciClusterPlacementGroupsClusterPlacementGroupConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterPlacementGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#cluster_placement_group_id DataOciClusterPlacementGroupsClusterPlacementGroup#cluster_placement_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupConfig.property.clusterPlacementGroupId"></a>

```java
public java.lang.String getClusterPlacementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_group#cluster_placement_group_id DataOciClusterPlacementGroupsClusterPlacementGroup#cluster_placement_group_id}.

---

### DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction <a name="DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction;

DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList;

new DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.get"></a>

```java
public DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference;

new DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsOutputReference.property.internalValue"></a>

```java
public DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItems</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList;

new DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.get"></a>

```java
public DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference;

new DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.items"></a>

```java
public DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilitiesOutputReference.property.internalValue"></a>

```java
public DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupCapabilities</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList;

new DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.get"></a>

```java
public DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cluster_placement_groups_cluster_placement_group.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference;

new DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstructionOutputReference.property.internalValue"></a>

```java
public DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroup.DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupPlacementInstruction</a>

---




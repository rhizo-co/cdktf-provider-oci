# `dataOciRedisRedisClusterNodes` Submodule <a name="`dataOciRedisRedisClusterNodes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciRedisRedisClusterNodes <a name="DataOciRedisRedisClusterNodes" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes oci_redis_redis_cluster_nodes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodes;

DataOciRedisRedisClusterNodes.Builder.create(Construct scope, java.lang.String id)
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
    .redisClusterId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciRedisRedisClusterNodesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.redisClusterId">redisClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#redis_cluster_id DataOciRedisRedisClusterNodes#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#display_name DataOciRedisRedisClusterNodes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#id DataOciRedisRedisClusterNodes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `redisClusterId`<sup>Required</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.redisClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#redis_cluster_id DataOciRedisRedisClusterNodes#redis_cluster_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#display_name DataOciRedisRedisClusterNodes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#filter DataOciRedisRedisClusterNodes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#id DataOciRedisRedisClusterNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciRedisRedisClusterNodesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciRedisRedisClusterNodes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodes;

DataOciRedisRedisClusterNodes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodes;

DataOciRedisRedisClusterNodes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodes;

DataOciRedisRedisClusterNodes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodes;

DataOciRedisRedisClusterNodes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciRedisRedisClusterNodes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciRedisRedisClusterNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciRedisRedisClusterNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciRedisRedisClusterNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciRedisRedisClusterNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList">DataOciRedisRedisClusterNodesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisNodeCollection">redisNodeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList">DataOciRedisRedisClusterNodesRedisNodeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisClusterIdInput">redisClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisClusterId">redisClusterId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.filter"></a>

```java
public DataOciRedisRedisClusterNodesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList">DataOciRedisRedisClusterNodesFilterList</a>

---

##### `redisNodeCollection`<sup>Required</sup> <a name="redisNodeCollection" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisNodeCollection"></a>

```java
public DataOciRedisRedisClusterNodesRedisNodeCollectionList getRedisNodeCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList">DataOciRedisRedisClusterNodesRedisNodeCollectionList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `redisClusterIdInput`<sup>Optional</sup> <a name="redisClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisClusterIdInput"></a>

```java
public java.lang.String getRedisClusterIdInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `redisClusterId`<sup>Required</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.redisClusterId"></a>

```java
public java.lang.String getRedisClusterId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciRedisRedisClusterNodesConfig <a name="DataOciRedisRedisClusterNodesConfig" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesConfig;

DataOciRedisRedisClusterNodesConfig.builder()
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
    .redisClusterId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciRedisRedisClusterNodesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.redisClusterId">redisClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#redis_cluster_id DataOciRedisRedisClusterNodes#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#display_name DataOciRedisRedisClusterNodes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#id DataOciRedisRedisClusterNodes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `redisClusterId`<sup>Required</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.redisClusterId"></a>

```java
public java.lang.String getRedisClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#redis_cluster_id DataOciRedisRedisClusterNodes#redis_cluster_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#display_name DataOciRedisRedisClusterNodes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#filter DataOciRedisRedisClusterNodes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#id DataOciRedisRedisClusterNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciRedisRedisClusterNodesFilter <a name="DataOciRedisRedisClusterNodesFilter" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesFilter;

DataOciRedisRedisClusterNodesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#name DataOciRedisRedisClusterNodes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#values DataOciRedisRedisClusterNodes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#regex DataOciRedisRedisClusterNodes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#name DataOciRedisRedisClusterNodes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#values DataOciRedisRedisClusterNodes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/redis_redis_cluster_nodes#regex DataOciRedisRedisClusterNodes#regex}.

---

### DataOciRedisRedisClusterNodesRedisNodeCollection <a name="DataOciRedisRedisClusterNodesRedisNodeCollection" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesRedisNodeCollection;

DataOciRedisRedisClusterNodesRedisNodeCollection.builder()
    .build();
```


### DataOciRedisRedisClusterNodesRedisNodeCollectionItems <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItems;

DataOciRedisRedisClusterNodesRedisNodeCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciRedisRedisClusterNodesFilterList <a name="DataOciRedisRedisClusterNodesFilterList" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesFilterList;

new DataOciRedisRedisClusterNodesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.get"></a>

```java
public DataOciRedisRedisClusterNodesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>>

---


### DataOciRedisRedisClusterNodesFilterOutputReference <a name="DataOciRedisRedisClusterNodesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesFilterOutputReference;

new DataOciRedisRedisClusterNodesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesFilter">DataOciRedisRedisClusterNodesFilter</a>

---


### DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList;

new DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.get"></a>

```java
public DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference;

new DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.privateEndpointFqdn">privateEndpointFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.privateEndpointIpAddress">privateEndpointIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.redisClusterId">redisClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.shardNumber">shardNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItems">DataOciRedisRedisClusterNodesRedisNodeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `privateEndpointFqdn`<sup>Required</sup> <a name="privateEndpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.privateEndpointFqdn"></a>

```java
public java.lang.String getPrivateEndpointFqdn();
```

- *Type:* java.lang.String

---

##### `privateEndpointIpAddress`<sup>Required</sup> <a name="privateEndpointIpAddress" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.privateEndpointIpAddress"></a>

```java
public java.lang.String getPrivateEndpointIpAddress();
```

- *Type:* java.lang.String

---

##### `redisClusterId`<sup>Required</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.redisClusterId"></a>

```java
public java.lang.String getRedisClusterId();
```

- *Type:* java.lang.String

---

##### `shardNumber`<sup>Required</sup> <a name="shardNumber" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.shardNumber"></a>

```java
public java.lang.Number getShardNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciRedisRedisClusterNodesRedisNodeCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItems">DataOciRedisRedisClusterNodesRedisNodeCollectionItems</a>

---


### DataOciRedisRedisClusterNodesRedisNodeCollectionList <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList;

new DataOciRedisRedisClusterNodesRedisNodeCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.get"></a>

```java
public DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference <a name="DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_redis_redis_cluster_nodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference;

new DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList">DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollection">DataOciRedisRedisClusterNodesRedisNodeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.items"></a>

```java
public DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList">DataOciRedisRedisClusterNodesRedisNodeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollectionOutputReference.property.internalValue"></a>

```java
public DataOciRedisRedisClusterNodesRedisNodeCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciRedisRedisClusterNodes.DataOciRedisRedisClusterNodesRedisNodeCollection">DataOciRedisRedisClusterNodesRedisNodeCollection</a>

---




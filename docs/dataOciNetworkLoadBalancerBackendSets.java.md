# `dataOciNetworkLoadBalancerBackendSets` Submodule <a name="`dataOciNetworkLoadBalancerBackendSets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkLoadBalancerBackendSets <a name="DataOciNetworkLoadBalancerBackendSets" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets oci_network_load_balancer_backend_sets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSets;

DataOciNetworkLoadBalancerBackendSets.Builder.create(Construct scope, java.lang.String id)
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
    .networkLoadBalancerId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciNetworkLoadBalancerBackendSetsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#network_load_balancer_id DataOciNetworkLoadBalancerBackendSets#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#id DataOciNetworkLoadBalancerBackendSets#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.networkLoadBalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#network_load_balancer_id DataOciNetworkLoadBalancerBackendSets#network_load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#filter DataOciNetworkLoadBalancerBackendSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#id DataOciNetworkLoadBalancerBackendSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciNetworkLoadBalancerBackendSetsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSets;

DataOciNetworkLoadBalancerBackendSets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSets;

DataOciNetworkLoadBalancerBackendSets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSets;

DataOciNetworkLoadBalancerBackendSets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSets;

DataOciNetworkLoadBalancerBackendSets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciNetworkLoadBalancerBackendSets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciNetworkLoadBalancerBackendSets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciNetworkLoadBalancerBackendSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkLoadBalancerBackendSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.backendSetCollection">backendSetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList">DataOciNetworkLoadBalancerBackendSetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.networkLoadBalancerIdInput">networkLoadBalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `backendSetCollection`<sup>Required</sup> <a name="backendSetCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.backendSetCollection"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList getBackendSetCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.filter"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList">DataOciNetworkLoadBalancerBackendSetsFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerIdInput`<sup>Optional</sup> <a name="networkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.networkLoadBalancerIdInput"></a>

```java
public java.lang.String getNetworkLoadBalancerIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.networkLoadBalancerId"></a>

```java
public java.lang.String getNetworkLoadBalancerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkLoadBalancerBackendSetsBackendSetCollection <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection;

DataOciNetworkLoadBalancerBackendSetsBackendSetCollection.builder()
    .build();
```


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems;

DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems.builder()
    .build();
```


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends;

DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends.builder()
    .build();
```


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker;

DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker.builder()
    .build();
```


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns;

DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns.builder()
    .build();
```


### DataOciNetworkLoadBalancerBackendSetsConfig <a name="DataOciNetworkLoadBalancerBackendSetsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsConfig;

DataOciNetworkLoadBalancerBackendSetsConfig.builder()
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
    .networkLoadBalancerId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciNetworkLoadBalancerBackendSetsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#network_load_balancer_id DataOciNetworkLoadBalancerBackendSets#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#id DataOciNetworkLoadBalancerBackendSets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.networkLoadBalancerId"></a>

```java
public java.lang.String getNetworkLoadBalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#network_load_balancer_id DataOciNetworkLoadBalancerBackendSets#network_load_balancer_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#filter DataOciNetworkLoadBalancerBackendSets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#id DataOciNetworkLoadBalancerBackendSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkLoadBalancerBackendSetsFilter <a name="DataOciNetworkLoadBalancerBackendSetsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsFilter;

DataOciNetworkLoadBalancerBackendSetsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#name DataOciNetworkLoadBalancerBackendSets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#values DataOciNetworkLoadBalancerBackendSets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#regex DataOciNetworkLoadBalancerBackendSets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#name DataOciNetworkLoadBalancerBackendSets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#values DataOciNetworkLoadBalancerBackendSets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_load_balancer_backend_sets#regex DataOciNetworkLoadBalancerBackendSets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isBackup">isBackup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isDrain">isDrain</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isOffline">isOffline</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `isBackup`<sup>Required</sup> <a name="isBackup" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isBackup"></a>

```java
public IResolvable getIsBackup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDrain`<sup>Required</sup> <a name="isDrain" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isDrain"></a>

```java
public IResolvable getIsDrain();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOffline`<sup>Required</sup> <a name="isOffline" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.isOffline"></a>

```java
public IResolvable getIsOffline();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference.property.internalValue"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends</a>

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.queryClass">queryClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.queryType">queryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.rcodes">rcodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.transportProtocol">transportProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `queryClass`<sup>Required</sup> <a name="queryClass" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.queryClass"></a>

```java
public java.lang.String getQueryClass();
```

- *Type:* java.lang.String

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

---

##### `rcodes`<sup>Required</sup> <a name="rcodes" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.rcodes"></a>

```java
public java.util.List<java.lang.String> getRcodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `transportProtocol`<sup>Required</sup> <a name="transportProtocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```java
public java.lang.String getTransportProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference.property.internalValue"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns</a>

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.intervalInMillis">intervalInMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.requestData">requestData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.responseBodyRegex">responseBodyRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.responseData">responseData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.returnCode">returnCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.dns"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList getDns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList</a>

---

##### `intervalInMillis`<sup>Required</sup> <a name="intervalInMillis" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.intervalInMillis"></a>

```java
public java.lang.Number getIntervalInMillis();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `requestData`<sup>Required</sup> <a name="requestData" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.requestData"></a>

```java
public java.lang.String getRequestData();
```

- *Type:* java.lang.String

---

##### `responseBodyRegex`<sup>Required</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.responseBodyRegex"></a>

```java
public java.lang.String getResponseBodyRegex();
```

- *Type:* java.lang.String

---

##### `responseData`<sup>Required</sup> <a name="responseData" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.responseData"></a>

```java
public java.lang.String getResponseData();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `returnCode`<sup>Required</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.returnCode"></a>

```java
public java.lang.Number getReturnCode();
```

- *Type:* java.lang.Number

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.timeoutInMillis"></a>

```java
public java.lang.Number getTimeoutInMillis();
```

- *Type:* java.lang.Number

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference.property.internalValue"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker</a>

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.backends">backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isFailOpen">isFailOpen</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isInstantFailoverEnabled">isInstantFailoverEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isPreserveSource">isPreserveSource</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.networkLoadBalancerId">networkLoadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backends`<sup>Required</sup> <a name="backends" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.backends"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList getBackends();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList</a>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.healthChecker"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList getHealthChecker();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `isFailOpen`<sup>Required</sup> <a name="isFailOpen" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isFailOpen"></a>

```java
public IResolvable getIsFailOpen();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isInstantFailoverEnabled`<sup>Required</sup> <a name="isInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isInstantFailoverEnabled"></a>

```java
public IResolvable getIsInstantFailoverEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPreserveSource`<sup>Required</sup> <a name="isPreserveSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.isPreserveSource"></a>

```java
public IResolvable getIsPreserveSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkLoadBalancerId`<sup>Required</sup> <a name="networkLoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.networkLoadBalancerId"></a>

```java
public java.lang.String getNetworkLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems</a>

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference;

new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection">DataOciNetworkLoadBalancerBackendSetsBackendSetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.items"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList">DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference.property.internalValue"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsBackendSetCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsBackendSetCollection">DataOciNetworkLoadBalancerBackendSetsBackendSetCollection</a>

---


### DataOciNetworkLoadBalancerBackendSetsFilterList <a name="DataOciNetworkLoadBalancerBackendSetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsFilterList;

new DataOciNetworkLoadBalancerBackendSetsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.get"></a>

```java
public DataOciNetworkLoadBalancerBackendSetsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>>

---


### DataOciNetworkLoadBalancerBackendSetsFilterOutputReference <a name="DataOciNetworkLoadBalancerBackendSetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_network_load_balancer_backend_sets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference;

new DataOciNetworkLoadBalancerBackendSetsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkLoadBalancerBackendSets.DataOciNetworkLoadBalancerBackendSetsFilter">DataOciNetworkLoadBalancerBackendSetsFilter</a>

---




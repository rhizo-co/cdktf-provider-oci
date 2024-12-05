# `dataOciUsageProxyResourceQuotas` Submodule <a name="`dataOciUsageProxyResourceQuotas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxyResourceQuotas <a name="DataOciUsageProxyResourceQuotas" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas oci_usage_proxy_resource_quotas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotas;

DataOciUsageProxyResourceQuotas.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .serviceName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciUsageProxyResourceQuotasFilter>)
//  .id(java.lang.String)
//  .serviceEntitlement(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#compartment_id DataOciUsageProxyResourceQuotas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_name DataOciUsageProxyResourceQuotas#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#id DataOciUsageProxyResourceQuotas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.serviceEntitlement">serviceEntitlement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_entitlement DataOciUsageProxyResourceQuotas#service_entitlement}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#compartment_id DataOciUsageProxyResourceQuotas#compartment_id}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_name DataOciUsageProxyResourceQuotas#service_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#filter DataOciUsageProxyResourceQuotas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#id DataOciUsageProxyResourceQuotas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceEntitlement`<sup>Optional</sup> <a name="serviceEntitlement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.Initializer.parameter.serviceEntitlement"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_entitlement DataOciUsageProxyResourceQuotas#service_entitlement}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetServiceEntitlement">resetServiceEntitlement</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciUsageProxyResourceQuotasFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetId"></a>

```java
public void resetId()
```

##### `resetServiceEntitlement` <a name="resetServiceEntitlement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.resetServiceEntitlement"></a>

```java
public void resetServiceEntitlement()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciUsageProxyResourceQuotas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotas;

DataOciUsageProxyResourceQuotas.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotas;

DataOciUsageProxyResourceQuotas.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotas;

DataOciUsageProxyResourceQuotas.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotas;

DataOciUsageProxyResourceQuotas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciUsageProxyResourceQuotas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciUsageProxyResourceQuotas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciUsageProxyResourceQuotas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciUsageProxyResourceQuotas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxyResourceQuotas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList">DataOciUsageProxyResourceQuotasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.resourceQuotumCollection">resourceQuotumCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList">DataOciUsageProxyResourceQuotasResourceQuotumCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceEntitlementInput">serviceEntitlementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceEntitlement">serviceEntitlement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.filter"></a>

```java
public DataOciUsageProxyResourceQuotasFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList">DataOciUsageProxyResourceQuotasFilterList</a>

---

##### `resourceQuotumCollection`<sup>Required</sup> <a name="resourceQuotumCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.resourceQuotumCollection"></a>

```java
public DataOciUsageProxyResourceQuotasResourceQuotumCollectionList getResourceQuotumCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList">DataOciUsageProxyResourceQuotasResourceQuotumCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serviceEntitlementInput`<sup>Optional</sup> <a name="serviceEntitlementInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceEntitlementInput"></a>

```java
public java.lang.String getServiceEntitlementInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceEntitlement`<sup>Required</sup> <a name="serviceEntitlement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceEntitlement"></a>

```java
public java.lang.String getServiceEntitlement();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotas.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxyResourceQuotasConfig <a name="DataOciUsageProxyResourceQuotasConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasConfig;

DataOciUsageProxyResourceQuotasConfig.builder()
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
    .compartmentId(java.lang.String)
    .serviceName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciUsageProxyResourceQuotasFilter>)
//  .id(java.lang.String)
//  .serviceEntitlement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#compartment_id DataOciUsageProxyResourceQuotas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_name DataOciUsageProxyResourceQuotas#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#id DataOciUsageProxyResourceQuotas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.serviceEntitlement">serviceEntitlement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_entitlement DataOciUsageProxyResourceQuotas#service_entitlement}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#compartment_id DataOciUsageProxyResourceQuotas#compartment_id}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_name DataOciUsageProxyResourceQuotas#service_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#filter DataOciUsageProxyResourceQuotas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#id DataOciUsageProxyResourceQuotas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceEntitlement`<sup>Optional</sup> <a name="serviceEntitlement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasConfig.property.serviceEntitlement"></a>

```java
public java.lang.String getServiceEntitlement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#service_entitlement DataOciUsageProxyResourceQuotas#service_entitlement}.

---

### DataOciUsageProxyResourceQuotasFilter <a name="DataOciUsageProxyResourceQuotasFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasFilter;

DataOciUsageProxyResourceQuotasFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#name DataOciUsageProxyResourceQuotas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#values DataOciUsageProxyResourceQuotas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#regex DataOciUsageProxyResourceQuotas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#name DataOciUsageProxyResourceQuotas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#values DataOciUsageProxyResourceQuotas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_resource_quotas#regex DataOciUsageProxyResourceQuotas#regex}.

---

### DataOciUsageProxyResourceQuotasResourceQuotumCollection <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection;

DataOciUsageProxyResourceQuotasResourceQuotumCollection.builder()
    .build();
```


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems;

DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxyResourceQuotasFilterList <a name="DataOciUsageProxyResourceQuotasFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasFilterList;

new DataOciUsageProxyResourceQuotasFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.get"></a>

```java
public DataOciUsageProxyResourceQuotasFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>>

---


### DataOciUsageProxyResourceQuotasFilterOutputReference <a name="DataOciUsageProxyResourceQuotasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasFilterOutputReference;

new DataOciUsageProxyResourceQuotasFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasFilter">DataOciUsageProxyResourceQuotasFilter</a>

---


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList;

new DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.get"></a>

```java
public DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference;

new DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.affectedResource">affectedResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.balance">balance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isAllowed">isAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isDependency">isDependency</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isOverage">isOverage</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.purchasedLimit">purchasedLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems">DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `affectedResource`<sup>Required</sup> <a name="affectedResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.affectedResource"></a>

```java
public java.lang.String getAffectedResource();
```

- *Type:* java.lang.String

---

##### `balance`<sup>Required</sup> <a name="balance" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.balance"></a>

```java
public java.lang.Number getBalance();
```

- *Type:* java.lang.Number

---

##### `isAllowed`<sup>Required</sup> <a name="isAllowed" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isAllowed"></a>

```java
public IResolvable getIsAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDependency`<sup>Required</sup> <a name="isDependency" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isDependency"></a>

```java
public IResolvable getIsDependency();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOverage`<sup>Required</sup> <a name="isOverage" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.isOverage"></a>

```java
public IResolvable getIsOverage();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `purchasedLimit`<sup>Required</sup> <a name="purchasedLimit" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.purchasedLimit"></a>

```java
public java.lang.Number getPurchasedLimit();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems">DataOciUsageProxyResourceQuotasResourceQuotumCollectionItems</a>

---


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionList <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList;

new DataOciUsageProxyResourceQuotasResourceQuotumCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.get"></a>

```java
public DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference <a name="DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_usage_proxy_resource_quotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference;

new DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.isAllowed">isAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList">DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection">DataOciUsageProxyResourceQuotasResourceQuotumCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isAllowed`<sup>Required</sup> <a name="isAllowed" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.isAllowed"></a>

```java
public IResolvable getIsAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.items"></a>

```java
public DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList">DataOciUsageProxyResourceQuotasResourceQuotumCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollectionOutputReference.property.internalValue"></a>

```java
public DataOciUsageProxyResourceQuotasResourceQuotumCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyResourceQuotas.DataOciUsageProxyResourceQuotasResourceQuotumCollection">DataOciUsageProxyResourceQuotasResourceQuotumCollection</a>

---




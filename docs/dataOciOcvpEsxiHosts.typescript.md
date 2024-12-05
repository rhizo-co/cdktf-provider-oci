# `dataOciOcvpEsxiHosts` Submodule <a name="`dataOciOcvpEsxiHosts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpEsxiHosts <a name="DataOciOcvpEsxiHosts" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts oci_ocvp_esxi_hosts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts(scope: Construct, id: string, config?: DataOciOcvpEsxiHostsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig">DataOciOcvpEsxiHostsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig">DataOciOcvpEsxiHostsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetComputeInstanceId">resetComputeInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsBillingDonorsOnly">resetIsBillingDonorsOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsSwapBillingOnly">resetIsSwapBillingOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetSddcId">resetSddcId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOcvpEsxiHostsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>[]

---

##### `resetClusterId` <a name="resetClusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetComputeInstanceId` <a name="resetComputeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetComputeInstanceId"></a>

```typescript
public resetComputeInstanceId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsBillingDonorsOnly` <a name="resetIsBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsBillingDonorsOnly"></a>

```typescript
public resetIsBillingDonorsOnly(): void
```

##### `resetIsSwapBillingOnly` <a name="resetIsSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetIsSwapBillingOnly"></a>

```typescript
public resetIsSwapBillingOnly(): void
```

##### `resetSddcId` <a name="resetSddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetSddcId"></a>

```typescript
public resetSddcId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpEsxiHosts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOcvpEsxiHosts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOcvpEsxiHosts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOcvpEsxiHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpEsxiHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.esxiHostCollection">esxiHostCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList">DataOciOcvpEsxiHostsEsxiHostCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList">DataOciOcvpEsxiHostsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceIdInput">computeInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnlyInput">isBillingDonorsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnlyInput">isSwapBillingOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcIdInput">sddcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceId">computeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnly">isBillingDonorsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnly">isSwapBillingOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcId">sddcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `esxiHostCollection`<sup>Required</sup> <a name="esxiHostCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.esxiHostCollection"></a>

```typescript
public readonly esxiHostCollection: DataOciOcvpEsxiHostsEsxiHostCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList">DataOciOcvpEsxiHostsEsxiHostCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filter"></a>

```typescript
public readonly filter: DataOciOcvpEsxiHostsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList">DataOciOcvpEsxiHostsFilterList</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computeInstanceIdInput`<sup>Optional</sup> <a name="computeInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceIdInput"></a>

```typescript
public readonly computeInstanceIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOcvpEsxiHostsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isBillingDonorsOnlyInput`<sup>Optional</sup> <a name="isBillingDonorsOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnlyInput"></a>

```typescript
public readonly isBillingDonorsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSwapBillingOnlyInput`<sup>Optional</sup> <a name="isSwapBillingOnlyInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnlyInput"></a>

```typescript
public readonly isSwapBillingOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sddcIdInput`<sup>Optional</sup> <a name="sddcIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcIdInput"></a>

```typescript
public readonly sddcIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeInstanceId`<sup>Required</sup> <a name="computeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.computeInstanceId"></a>

```typescript
public readonly computeInstanceId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isBillingDonorsOnly`<sup>Required</sup> <a name="isBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isBillingDonorsOnly"></a>

```typescript
public readonly isBillingDonorsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSwapBillingOnly`<sup>Required</sup> <a name="isSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.isSwapBillingOnly"></a>

```typescript
public readonly isSwapBillingOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sddcId`<sup>Required</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.sddcId"></a>

```typescript
public readonly sddcId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHosts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpEsxiHostsConfig <a name="DataOciOcvpEsxiHostsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.Initializer"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpEsxiHostsConfig: dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.computeInstanceId">computeInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isBillingDonorsOnly">isBillingDonorsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isSwapBillingOnly">isSwapBillingOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.sddcId">sddcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}.

---

##### `computeInstanceId`<sup>Optional</sup> <a name="computeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.computeInstanceId"></a>

```typescript
public readonly computeInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOcvpEsxiHostsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#filter DataOciOcvpEsxiHosts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isBillingDonorsOnly`<sup>Optional</sup> <a name="isBillingDonorsOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isBillingDonorsOnly"></a>

```typescript
public readonly isBillingDonorsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}.

---

##### `isSwapBillingOnly`<sup>Optional</sup> <a name="isSwapBillingOnly" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.isSwapBillingOnly"></a>

```typescript
public readonly isSwapBillingOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}.

---

##### `sddcId`<sup>Optional</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.sddcId"></a>

```typescript
public readonly sddcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}.

---

### DataOciOcvpEsxiHostsEsxiHostCollection <a name="DataOciOcvpEsxiHostsEsxiHostCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection.Initializer"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpEsxiHostsEsxiHostCollection: dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection = { ... }
```


### DataOciOcvpEsxiHostsFilter <a name="DataOciOcvpEsxiHostsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.Initializer"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

const dataOciOcvpEsxiHostsFilter: dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#name DataOciOcvpEsxiHosts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#values DataOciOcvpEsxiHosts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#regex DataOciOcvpEsxiHosts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#name DataOciOcvpEsxiHosts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#values DataOciOcvpEsxiHosts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_esxi_hosts#regex DataOciOcvpEsxiHosts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpEsxiHostsEsxiHostCollectionList <a name="DataOciOcvpEsxiHostsEsxiHostCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get"></a>

```typescript
public get(index: number): DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference <a name="DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingContractEndDate">billingContractEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingDonorHostId">billingDonorHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeInstanceId">computeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentCommitment">currentCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentSku">currentSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.failedEsxiHostId">failedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.gracePeriodEndDate">gracePeriodEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostOcpuCount">hostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostShapeName">hostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingContinuationInProgress">isBillingContinuationInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingSwappingInProgress">isBillingSwappingInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextCommitment">nextCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextSku">nextSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nonUpgradedEsxiHostId">nonUpgradedEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.replacementEsxiHostId">replacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.sddcId">sddcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.swapBillingHostId">swapBillingHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.upgradedReplacementEsxiHostId">upgradedReplacementEsxiHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection">DataOciOcvpEsxiHostsEsxiHostCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingContractEndDate`<sup>Required</sup> <a name="billingContractEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingContractEndDate"></a>

```typescript
public readonly billingContractEndDate: string;
```

- *Type:* string

---

##### `billingDonorHostId`<sup>Required</sup> <a name="billingDonorHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.billingDonorHostId"></a>

```typescript
public readonly billingDonorHostId: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeAvailabilityDomain"></a>

```typescript
public readonly computeAvailabilityDomain: string;
```

- *Type:* string

---

##### `computeInstanceId`<sup>Required</sup> <a name="computeInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.computeInstanceId"></a>

```typescript
public readonly computeInstanceId: string;
```

- *Type:* string

---

##### `currentCommitment`<sup>Required</sup> <a name="currentCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentCommitment"></a>

```typescript
public readonly currentCommitment: string;
```

- *Type:* string

---

##### `currentSku`<sup>Required</sup> <a name="currentSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.currentSku"></a>

```typescript
public readonly currentSku: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.esxiSoftwareVersion"></a>

```typescript
public readonly esxiSoftwareVersion: string;
```

- *Type:* string

---

##### `failedEsxiHostId`<sup>Required</sup> <a name="failedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.failedEsxiHostId"></a>

```typescript
public readonly failedEsxiHostId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gracePeriodEndDate`<sup>Required</sup> <a name="gracePeriodEndDate" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.gracePeriodEndDate"></a>

```typescript
public readonly gracePeriodEndDate: string;
```

- *Type:* string

---

##### `hostOcpuCount`<sup>Required</sup> <a name="hostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostOcpuCount"></a>

```typescript
public readonly hostOcpuCount: number;
```

- *Type:* number

---

##### `hostShapeName`<sup>Required</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.hostShapeName"></a>

```typescript
public readonly hostShapeName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isBillingContinuationInProgress`<sup>Required</sup> <a name="isBillingContinuationInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingContinuationInProgress"></a>

```typescript
public readonly isBillingContinuationInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBillingSwappingInProgress`<sup>Required</sup> <a name="isBillingSwappingInProgress" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.isBillingSwappingInProgress"></a>

```typescript
public readonly isBillingSwappingInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nextCommitment`<sup>Required</sup> <a name="nextCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextCommitment"></a>

```typescript
public readonly nextCommitment: string;
```

- *Type:* string

---

##### `nextSku`<sup>Required</sup> <a name="nextSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nextSku"></a>

```typescript
public readonly nextSku: string;
```

- *Type:* string

---

##### `nonUpgradedEsxiHostId`<sup>Required</sup> <a name="nonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.nonUpgradedEsxiHostId"></a>

```typescript
public readonly nonUpgradedEsxiHostId: string;
```

- *Type:* string

---

##### `replacementEsxiHostId`<sup>Required</sup> <a name="replacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.replacementEsxiHostId"></a>

```typescript
public readonly replacementEsxiHostId: string;
```

- *Type:* string

---

##### `sddcId`<sup>Required</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.sddcId"></a>

```typescript
public readonly sddcId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `swapBillingHostId`<sup>Required</sup> <a name="swapBillingHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.swapBillingHostId"></a>

```typescript
public readonly swapBillingHostId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `upgradedReplacementEsxiHostId`<sup>Required</sup> <a name="upgradedReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.upgradedReplacementEsxiHostId"></a>

```typescript
public readonly upgradedReplacementEsxiHostId: string;
```

- *Type:* string

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.vmwareSoftwareVersion"></a>

```typescript
public readonly vmwareSoftwareVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOcvpEsxiHostsEsxiHostCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsEsxiHostCollection">DataOciOcvpEsxiHostsEsxiHostCollection</a>

---


### DataOciOcvpEsxiHostsFilterList <a name="DataOciOcvpEsxiHostsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get"></a>

```typescript
public get(index: number): DataOciOcvpEsxiHostsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOcvpEsxiHostsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>[]

---


### DataOciOcvpEsxiHostsFilterOutputReference <a name="DataOciOcvpEsxiHostsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOcvpEsxiHosts } from 'rhizo-co-terraform-provider-oci'

new dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOcvpEsxiHostsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpEsxiHosts.DataOciOcvpEsxiHostsFilter">DataOciOcvpEsxiHostsFilter</a>

---




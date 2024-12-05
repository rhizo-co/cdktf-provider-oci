# `dataOciCapacityManagementOccCapacityRequests` Submodule <a name="`dataOciCapacityManagementOccCapacityRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccCapacityRequests <a name="DataOciCapacityManagementOccCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests oci_capacity_management_occ_capacity_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests(scope: Construct, id: string, config: DataOciCapacityManagementOccCapacityRequestsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig">DataOciCapacityManagementOccCapacityRequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig">DataOciCapacityManagementOccCapacityRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOccAvailabilityCatalogId">resetOccAvailabilityCatalogId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetRequestType">resetRequestType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCapacityManagementOccCapacityRequestsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOccAvailabilityCatalogId` <a name="resetOccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetOccAvailabilityCatalogId"></a>

```typescript
public resetOccAvailabilityCatalogId(): void
```

##### `resetRequestType` <a name="resetRequestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.resetRequestType"></a>

```typescript
public resetRequestType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequests resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccCapacityRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccCapacityRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccCapacityRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList">DataOciCapacityManagementOccCapacityRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occCapacityRequestCollection">occCapacityRequestCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogIdInput">occAvailabilityCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestTypeInput">requestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filter"></a>

```typescript
public readonly filter: DataOciCapacityManagementOccCapacityRequestsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList">DataOciCapacityManagementOccCapacityRequestsFilterList</a>

---

##### `occCapacityRequestCollection`<sup>Required</sup> <a name="occCapacityRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occCapacityRequestCollection"></a>

```typescript
public readonly occCapacityRequestCollection: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCapacityManagementOccCapacityRequestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `occAvailabilityCatalogIdInput`<sup>Optional</sup> <a name="occAvailabilityCatalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogIdInput"></a>

```typescript
public readonly occAvailabilityCatalogIdInput: string;
```

- *Type:* string

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestTypeInput"></a>

```typescript
public readonly requestTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `occAvailabilityCatalogId`<sup>Required</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.occAvailabilityCatalogId"></a>

```typescript
public readonly occAvailabilityCatalogId: string;
```

- *Type:* string

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequests.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccCapacityRequestsConfig <a name="DataOciCapacityManagementOccCapacityRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCapacityRequestsConfig: dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.requestType">requestType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#compartment_id DataOciCapacityManagementOccCapacityRequests#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#display_name DataOciCapacityManagementOccCapacityRequests#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCapacityManagementOccCapacityRequestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#filter DataOciCapacityManagementOccCapacityRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#id DataOciCapacityManagementOccCapacityRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#namespace DataOciCapacityManagementOccCapacityRequests#namespace}.

---

##### `occAvailabilityCatalogId`<sup>Optional</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.occAvailabilityCatalogId"></a>

```typescript
public readonly occAvailabilityCatalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#occ_availability_catalog_id DataOciCapacityManagementOccCapacityRequests#occ_availability_catalog_id}.

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsConfig.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#request_type DataOciCapacityManagementOccCapacityRequests#request_type}.

---

### DataOciCapacityManagementOccCapacityRequestsFilter <a name="DataOciCapacityManagementOccCapacityRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCapacityRequestsFilter: dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#name DataOciCapacityManagementOccCapacityRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#values DataOciCapacityManagementOccCapacityRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#regex DataOciCapacityManagementOccCapacityRequests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#name DataOciCapacityManagementOccCapacityRequests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#values DataOciCapacityManagementOccCapacityRequests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_requests#regex DataOciCapacityManagementOccCapacityRequests#regex}.

---

### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection: dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection = { ... }
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems: dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems = { ... }
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails: dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails = { ... }
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct: dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct = { ... }
```


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations: dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccCapacityRequestsFilterList <a name="DataOciCapacityManagementOccCapacityRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCapacityRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccCapacityRequestsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>[]

---


### DataOciCapacityManagementOccCapacityRequestsFilterOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccCapacityRequestsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsFilter">DataOciCapacityManagementOccCapacityRequestsFilter</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">handoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `handoverQuantity`<sup>Required</sup> <a name="handoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```typescript
public readonly handoverQuantity: string;
```

- *Type:* string

---

##### `occHandoverResourceBlockId`<sup>Required</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```typescript
public readonly occHandoverResourceBlockId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStruct</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.actualHandoverQuantity">actualHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.associatedOccHandoverResourceBlockList">associatedOccHandoverResourceBlockList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateActualHandover">dateActualHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateExpectedHandover">dateExpectedHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.demandQuantity">demandQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.expectedHandoverQuantity">expectedHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.sourceWorkloadType">sourceWorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actualHandoverQuantity`<sup>Required</sup> <a name="actualHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.actualHandoverQuantity"></a>

```typescript
public readonly actualHandoverQuantity: string;
```

- *Type:* string

---

##### `associatedOccHandoverResourceBlockList`<sup>Required</sup> <a name="associatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```typescript
public readonly associatedOccHandoverResourceBlockList: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `dateActualHandover`<sup>Required</sup> <a name="dateActualHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateActualHandover"></a>

```typescript
public readonly dateActualHandover: string;
```

- *Type:* string

---

##### `dateExpectedHandover`<sup>Required</sup> <a name="dateExpectedHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.dateExpectedHandover"></a>

```typescript
public readonly dateExpectedHandover: string;
```

- *Type:* string

---

##### `demandQuantity`<sup>Required</sup> <a name="demandQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.demandQuantity"></a>

```typescript
public readonly demandQuantity: string;
```

- *Type:* string

---

##### `expectedHandoverQuantity`<sup>Required</sup> <a name="expectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.expectedHandoverQuantity"></a>

```typescript
public readonly expectedHandoverQuantity: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `sourceWorkloadType`<sup>Required</sup> <a name="sourceWorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.sourceWorkloadType"></a>

```typescript
public readonly sourceWorkloadType: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetails</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestState">requestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.dateExpectedCapacityHandover"></a>

```typescript
public readonly dateExpectedCapacityHandover: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `occAvailabilityCatalogId`<sup>Required</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occAvailabilityCatalogId"></a>

```typescript
public readonly occAvailabilityCatalogId: string;
```

- *Type:* string

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```typescript
public readonly occCustomerGroupId: string;
```

- *Type:* string

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.patchOperations"></a>

```typescript
public readonly patchOperations: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `requestState`<sup>Required</sup> <a name="requestState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestState"></a>

```typescript
public readonly requestState: string;
```

- *Type:* string

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItems</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.position">position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selection">selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.value">value</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selectedItem"></a>

```typescript
public readonly selectedItem: string;
```

- *Type:* string

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.value"></a>

```typescript
public readonly value: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsPatchOperations</a>

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference <a name="DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccCapacityRequests } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequests.DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection">DataOciCapacityManagementOccCapacityRequestsOccCapacityRequestCollection</a>

---




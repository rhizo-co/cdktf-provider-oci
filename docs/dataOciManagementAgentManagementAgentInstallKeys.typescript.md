# `dataOciManagementAgentManagementAgentInstallKeys` Submodule <a name="`dataOciManagementAgentManagementAgentInstallKeys` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentInstallKeys <a name="DataOciManagementAgentManagementAgentInstallKeys" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys oci_management_agent_management_agent_install_keys}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentInstallKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig">DataOciManagementAgentManagementAgentInstallKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig">DataOciManagementAgentManagementAgentInstallKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciManagementAgentManagementAgentInstallKeysFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentInstallKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isConstruct"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformElement"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformDataSource"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentInstallKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentInstallKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciManagementAgentManagementAgentInstallKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentInstallKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList">DataOciManagementAgentManagementAgentInstallKeysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.managementAgentInstallKeys">managementAgentInstallKeys</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList">DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.filter"></a>

```typescript
public readonly filter: DataOciManagementAgentManagementAgentInstallKeysFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList">DataOciManagementAgentManagementAgentInstallKeysFilterList</a>

---

##### `managementAgentInstallKeys`<sup>Required</sup> <a name="managementAgentInstallKeys" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.managementAgentInstallKeys"></a>

```typescript
public readonly managementAgentInstallKeys: DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList">DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciManagementAgentManagementAgentInstallKeysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentInstallKeysConfig <a name="DataOciManagementAgentManagementAgentInstallKeysConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentInstallKeysConfig: dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id DataOciManagementAgentManagementAgentInstallKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#access_level DataOciManagementAgentManagementAgentInstallKeys#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id_in_subtree DataOciManagementAgentManagementAgentInstallKeys#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#display_name DataOciManagementAgentManagementAgentInstallKeys#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#id DataOciManagementAgentManagementAgentInstallKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#state DataOciManagementAgentManagementAgentInstallKeys#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id DataOciManagementAgentManagementAgentInstallKeys#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#access_level DataOciManagementAgentManagementAgentInstallKeys#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id_in_subtree DataOciManagementAgentManagementAgentInstallKeys#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#display_name DataOciManagementAgentManagementAgentInstallKeys#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciManagementAgentManagementAgentInstallKeysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#filter DataOciManagementAgentManagementAgentInstallKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#id DataOciManagementAgentManagementAgentInstallKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#state DataOciManagementAgentManagementAgentInstallKeys#state}.

---

### DataOciManagementAgentManagementAgentInstallKeysFilter <a name="DataOciManagementAgentManagementAgentInstallKeysFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentInstallKeysFilter: dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#name DataOciManagementAgentManagementAgentInstallKeys#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#values DataOciManagementAgentManagementAgentInstallKeys#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#regex DataOciManagementAgentManagementAgentInstallKeys#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#name DataOciManagementAgentManagementAgentInstallKeys#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#values DataOciManagementAgentManagementAgentInstallKeys#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#regex DataOciManagementAgentManagementAgentInstallKeys#regex}.

---

### DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys <a name="DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

const dataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys: dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentInstallKeysFilterList <a name="DataOciManagementAgentManagementAgentInstallKeysFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciManagementAgentManagementAgentInstallKeysFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>[]

---


### DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference <a name="DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciManagementAgentManagementAgentInstallKeysFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>

---


### DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList <a name="DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.get"></a>

```typescript
public get(index: number): DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference <a name="DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer"></a>

```typescript
import { dataOciManagementAgentManagementAgentInstallKeys } from 'rhizo-co-terraform-provider-oci'

new dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.allowedKeyInstallCount">allowedKeyInstallCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.createdByPrincipalId">createdByPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.currentKeyInstallCount">currentKeyInstallCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.isUnlimited">isUnlimited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeExpires">timeExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys">DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedKeyInstallCount`<sup>Required</sup> <a name="allowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.allowedKeyInstallCount"></a>

```typescript
public readonly allowedKeyInstallCount: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdByPrincipalId`<sup>Required</sup> <a name="createdByPrincipalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.createdByPrincipalId"></a>

```typescript
public readonly createdByPrincipalId: string;
```

- *Type:* string

---

##### `currentKeyInstallCount`<sup>Required</sup> <a name="currentKeyInstallCount" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.currentKeyInstallCount"></a>

```typescript
public readonly currentKeyInstallCount: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.isUnlimited"></a>

```typescript
public readonly isUnlimited: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys">DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys</a>

---




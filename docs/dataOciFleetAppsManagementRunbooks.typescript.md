# `dataOciFleetAppsManagementRunbooks` Submodule <a name="`dataOciFleetAppsManagementRunbooks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementRunbooks <a name="DataOciFleetAppsManagementRunbooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks oci_fleet_apps_management_runbooks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks(scope: Construct, id: string, config?: DataOciFleetAppsManagementRunbooksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig">DataOciFleetAppsManagementRunbooksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig">DataOciFleetAppsManagementRunbooksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetRunbookRelevance">resetRunbookRelevance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFleetAppsManagementRunbooksFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperation` <a name="resetOperation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetPlatform` <a name="resetPlatform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetRunbookRelevance` <a name="resetRunbookRelevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetRunbookRelevance"></a>

```typescript
public resetRunbookRelevance(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetState"></a>

```typescript
public resetState(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementRunbooks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementRunbooks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementRunbooks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementRunbooks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementRunbooks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList">DataOciFleetAppsManagementRunbooksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookCollection">runbookCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList">DataOciFleetAppsManagementRunbooksRunbookCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookRelevanceInput">runbookRelevanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookRelevance">runbookRelevance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.filter"></a>

```typescript
public readonly filter: DataOciFleetAppsManagementRunbooksFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList">DataOciFleetAppsManagementRunbooksFilterList</a>

---

##### `runbookCollection`<sup>Required</sup> <a name="runbookCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookCollection"></a>

```typescript
public readonly runbookCollection: DataOciFleetAppsManagementRunbooksRunbookCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList">DataOciFleetAppsManagementRunbooksRunbookCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFleetAppsManagementRunbooksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `runbookRelevanceInput`<sup>Optional</sup> <a name="runbookRelevanceInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookRelevanceInput"></a>

```typescript
public readonly runbookRelevanceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `runbookRelevance`<sup>Required</sup> <a name="runbookRelevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookRelevance"></a>

```typescript
public readonly runbookRelevance: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementRunbooksConfig <a name="DataOciFleetAppsManagementRunbooksConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksConfig: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#compartment_id DataOciFleetAppsManagementRunbooks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#display_name DataOciFleetAppsManagementRunbooks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#id DataOciFleetAppsManagementRunbooks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#operation DataOciFleetAppsManagementRunbooks#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#platform DataOciFleetAppsManagementRunbooks#platform}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.runbookRelevance">runbookRelevance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#runbook_relevance DataOciFleetAppsManagementRunbooks#runbook_relevance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#state DataOciFleetAppsManagementRunbooks#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#type DataOciFleetAppsManagementRunbooks#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#compartment_id DataOciFleetAppsManagementRunbooks#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#display_name DataOciFleetAppsManagementRunbooks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFleetAppsManagementRunbooksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#filter DataOciFleetAppsManagementRunbooks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#id DataOciFleetAppsManagementRunbooks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#operation DataOciFleetAppsManagementRunbooks#operation}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#platform DataOciFleetAppsManagementRunbooks#platform}.

---

##### `runbookRelevance`<sup>Optional</sup> <a name="runbookRelevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.runbookRelevance"></a>

```typescript
public readonly runbookRelevance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#runbook_relevance DataOciFleetAppsManagementRunbooks#runbook_relevance}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#state DataOciFleetAppsManagementRunbooks#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#type DataOciFleetAppsManagementRunbooks#type}.

---

### DataOciFleetAppsManagementRunbooksFilter <a name="DataOciFleetAppsManagementRunbooksFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksFilter: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#name DataOciFleetAppsManagementRunbooks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#values DataOciFleetAppsManagementRunbooks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#regex DataOciFleetAppsManagementRunbooks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#name DataOciFleetAppsManagementRunbooks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#values DataOciFleetAppsManagementRunbooks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#regex DataOciFleetAppsManagementRunbooks#regex}.

---

### DataOciFleetAppsManagementRunbooksRunbookCollection <a name="DataOciFleetAppsManagementRunbooksRunbookCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollection: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItems <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItems: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables = { ... }
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties: dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementRunbooksFilterList <a name="DataOciFleetAppsManagementRunbooksFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementRunbooksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>[]

---


### DataOciFleetAppsManagementRunbooksFilterOutputReference <a name="DataOciFleetAppsManagementRunbooksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementRunbooksFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.workflow">workflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.workflow"></a>

```typescript
public readonly workflow: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps">steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps"></a>

```typescript
public readonly steps: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps">steps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps"></a>

```typescript
public readonly steps: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.actionOnFailure">actionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.runOn">runOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.actionOnFailure"></a>

```typescript
public readonly actionOnFailure: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `runOn`<sup>Required</sup> <a name="runOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.runOn"></a>

```typescript
public readonly runOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.executionWorkflowDetails">executionWorkflowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionWorkflowDetails`<sup>Required</sup> <a name="executionWorkflowDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.executionWorkflowDetails"></a>

```typescript
public readonly executionWorkflowDetails: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.groups"></a>

```typescript
public readonly groups: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.tasks"></a>

```typescript
public readonly tasks: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.associationType">associationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.outputVariableMappings">outputVariableMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.stepProperties">stepProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.taskRecordDetails">taskRecordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associationType`<sup>Required</sup> <a name="associationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.associationType"></a>

```typescript
public readonly associationType: string;
```

- *Type:* string

---

##### `outputVariableMappings`<sup>Required</sup> <a name="outputVariableMappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.outputVariableMappings"></a>

```typescript
public readonly outputVariableMappings: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList</a>

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `stepProperties`<sup>Required</sup> <a name="stepProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.stepProperties"></a>

```typescript
public readonly stepProperties: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList</a>

---

##### `taskRecordDetails`<sup>Required</sup> <a name="taskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.taskRecordDetails"></a>

```typescript
public readonly taskRecordDetails: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails">outputVariableDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputVariableDetails`<sup>Required</sup> <a name="outputVariableDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails"></a>

```typescript
public readonly outputVariableDetails: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName">outputVariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputVariableName`<sup>Required</sup> <a name="outputVariableName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName"></a>

```typescript
public readonly outputVariableName: string;
```

- *Type:* string

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure">actionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.runOn">runOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure"></a>

```typescript
public readonly actionOnFailure: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `runOn`<sup>Required</sup> <a name="runOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.runOn"></a>

```typescript
public readonly runOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType">executionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content"></a>

```typescript
public readonly content: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `executionType`<sup>Required</sup> <a name="executionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType"></a>

```typescript
public readonly executionType: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables"></a>

```typescript
public readonly variables: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">outputVariables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```typescript
public readonly inputVariables: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `outputVariables`<sup>Required</sup> <a name="outputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```typescript
public readonly outputVariables: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails">executionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled">isCopyToLibraryEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId">taskRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionDetails`<sup>Required</sup> <a name="executionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails"></a>

```typescript
public readonly executionDetails: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList</a>

---

##### `isCopyToLibraryEnabled`<sup>Required</sup> <a name="isCopyToLibraryEnabled" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled"></a>

```typescript
public readonly isCopyToLibraryEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `taskRecordId`<sup>Required</sup> <a name="taskRecordId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId"></a>

```typescript
public readonly taskRecordId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries">numRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numRetries`<sup>Required</sup> <a name="numRetries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries"></a>

```typescript
public readonly numRetries: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.associations">associations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.estimatedTime">estimatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.runbookRelevance">runbookRelevance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems">DataOciFleetAppsManagementRunbooksRunbookCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associations`<sup>Required</sup> <a name="associations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.associations"></a>

```typescript
public readonly associations: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `estimatedTime`<sup>Required</sup> <a name="estimatedTime" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.estimatedTime"></a>

```typescript
public readonly estimatedTime: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `runbookRelevance`<sup>Required</sup> <a name="runbookRelevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.runbookRelevance"></a>

```typescript
public readonly runbookRelevance: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems">DataOciFleetAppsManagementRunbooksRunbookCollectionItems</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementRunbooks } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection">DataOciFleetAppsManagementRunbooksRunbookCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementRunbooksRunbookCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection">DataOciFleetAppsManagementRunbooksRunbookCollection</a>

---




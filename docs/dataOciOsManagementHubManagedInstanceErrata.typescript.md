# `dataOciOsManagementHubManagedInstanceErrata` Submodule <a name="`dataOciOsManagementHubManagedInstanceErrata` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceErrata <a name="DataOciOsManagementHubManagedInstanceErrata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata oci_os_management_hub_managed_instance_errata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstanceErrataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig">DataOciOsManagementHubManagedInstanceErrataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig">DataOciOsManagementHubManagedInstanceErrataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetClassificationType">resetClassificationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetNameContains">resetNameContains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubManagedInstanceErrataFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter">DataOciOsManagementHubManagedInstanceErrataFilter</a>[]

---

##### `resetClassificationType` <a name="resetClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetClassificationType"></a>

```typescript
public resetClassificationType(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameContains` <a name="resetNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetNameContains"></a>

```typescript
public resetNameContains(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceErrata resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceErrata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceErrata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceErrata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceErrata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList">DataOciOsManagementHubManagedInstanceErrataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceErratumSummaryCollection">managedInstanceErratumSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationTypeInput">classificationTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter">DataOciOsManagementHubManagedInstanceErrataFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContainsInput">nameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameInput">nameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationType">classificationType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.name">name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContains">nameContains</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubManagedInstanceErrataFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList">DataOciOsManagementHubManagedInstanceErrataFilterList</a>

---

##### `managedInstanceErratumSummaryCollection`<sup>Required</sup> <a name="managedInstanceErratumSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceErratumSummaryCollection"></a>

```typescript
public readonly managedInstanceErratumSummaryCollection: DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList</a>

---

##### `classificationTypeInput`<sup>Optional</sup> <a name="classificationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationTypeInput"></a>

```typescript
public readonly classificationTypeInput: string[];
```

- *Type:* string[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubManagedInstanceErrataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter">DataOciOsManagementHubManagedInstanceErrataFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `nameContainsInput`<sup>Optional</sup> <a name="nameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContainsInput"></a>

```typescript
public readonly nameContainsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameInput"></a>

```typescript
public readonly nameInput: string[];
```

- *Type:* string[]

---

##### `classificationType`<sup>Required</sup> <a name="classificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationType"></a>

```typescript
public readonly classificationType: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.name"></a>

```typescript
public readonly name: string[];
```

- *Type:* string[]

---

##### `nameContains`<sup>Required</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceErrataConfig <a name="DataOciOsManagementHubManagedInstanceErrataConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceErrataConfig: dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#managed_instance_id DataOciOsManagementHubManagedInstanceErrata#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.classificationType">classificationType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#classification_type DataOciOsManagementHubManagedInstanceErrata#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#compartment_id DataOciOsManagementHubManagedInstanceErrata#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter">DataOciOsManagementHubManagedInstanceErrataFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#id DataOciOsManagementHubManagedInstanceErrata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.name">name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.nameContains">nameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name_contains DataOciOsManagementHubManagedInstanceErrata#name_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#managed_instance_id DataOciOsManagementHubManagedInstanceErrata#managed_instance_id}.

---

##### `classificationType`<sup>Optional</sup> <a name="classificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.classificationType"></a>

```typescript
public readonly classificationType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#classification_type DataOciOsManagementHubManagedInstanceErrata#classification_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#compartment_id DataOciOsManagementHubManagedInstanceErrata#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubManagedInstanceErrataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter">DataOciOsManagementHubManagedInstanceErrataFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#filter DataOciOsManagementHubManagedInstanceErrata#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#id DataOciOsManagementHubManagedInstanceErrata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.name"></a>

```typescript
public readonly name: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}.

---

##### `nameContains`<sup>Optional</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name_contains DataOciOsManagementHubManagedInstanceErrata#name_contains}.

---

### DataOciOsManagementHubManagedInstanceErrataFilter <a name="DataOciOsManagementHubManagedInstanceErrataFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceErrataFilter: dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#values DataOciOsManagementHubManagedInstanceErrata#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#regex DataOciOsManagementHubManagedInstanceErrata#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#values DataOciOsManagementHubManagedInstanceErrata#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#regex DataOciOsManagementHubManagedInstanceErrata#regex}.

---

### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection: dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection = { ... }
```


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems: dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems = { ... }
```


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages: dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceErrataFilterList <a name="DataOciOsManagementHubManagedInstanceErrataFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceErrataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter">DataOciOsManagementHubManagedInstanceErrataFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceErrataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter">DataOciOsManagementHubManagedInstanceErrataFilter</a>[]

---


### DataOciOsManagementHubManagedInstanceErrataFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter">DataOciOsManagementHubManagedInstanceErrataFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceErrataFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter">DataOciOsManagementHubManagedInstanceErrataFilter</a>

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.advisoryType">advisoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.packages">packages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.relatedCves">relatedCves</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.synopsis">synopsis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.timeIssued">timeIssued</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advisoryType`<sup>Required</sup> <a name="advisoryType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.advisoryType"></a>

```typescript
public readonly advisoryType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.packages"></a>

```typescript
public readonly packages: DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList</a>

---

##### `relatedCves`<sup>Required</sup> <a name="relatedCves" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.relatedCves"></a>

```typescript
public readonly relatedCves: string[];
```

- *Type:* string[]

---

##### `synopsis`<sup>Required</sup> <a name="synopsis" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.synopsis"></a>

```typescript
public readonly synopsis: string;
```

- *Type:* string

---

##### `timeIssued`<sup>Required</sup> <a name="timeIssued" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.timeIssued"></a>

```typescript
public readonly timeIssued: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages</a>

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceErrata } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection</a>

---




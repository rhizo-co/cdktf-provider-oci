# `dataOciFleetAppsManagementOnboardingPolicies` Submodule <a name="`dataOciFleetAppsManagementOnboardingPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementOnboardingPolicies <a name="DataOciFleetAppsManagementOnboardingPolicies" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies oci_fleet_apps_management_onboarding_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies(scope: Construct, id: string, config?: DataOciFleetAppsManagementOnboardingPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig">DataOciFleetAppsManagementOnboardingPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig">DataOciFleetAppsManagementOnboardingPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFleetAppsManagementOnboardingPoliciesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter">DataOciFleetAppsManagementOnboardingPoliciesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementOnboardingPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementOnboardingPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementOnboardingPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementOnboardingPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementOnboardingPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList">DataOciFleetAppsManagementOnboardingPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.onboardingPolicyCollection">onboardingPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList">DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter">DataOciFleetAppsManagementOnboardingPoliciesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.filter"></a>

```typescript
public readonly filter: DataOciFleetAppsManagementOnboardingPoliciesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList">DataOciFleetAppsManagementOnboardingPoliciesFilterList</a>

---

##### `onboardingPolicyCollection`<sup>Required</sup> <a name="onboardingPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.onboardingPolicyCollection"></a>

```typescript
public readonly onboardingPolicyCollection: DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList">DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFleetAppsManagementOnboardingPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter">DataOciFleetAppsManagementOnboardingPoliciesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementOnboardingPoliciesConfig <a name="DataOciFleetAppsManagementOnboardingPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementOnboardingPoliciesConfig: dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter">DataOciFleetAppsManagementOnboardingPoliciesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#id DataOciFleetAppsManagementOnboardingPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFleetAppsManagementOnboardingPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter">DataOciFleetAppsManagementOnboardingPoliciesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#filter DataOciFleetAppsManagementOnboardingPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#id DataOciFleetAppsManagementOnboardingPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementOnboardingPoliciesFilter <a name="DataOciFleetAppsManagementOnboardingPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementOnboardingPoliciesFilter: dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#name DataOciFleetAppsManagementOnboardingPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#values DataOciFleetAppsManagementOnboardingPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#regex DataOciFleetAppsManagementOnboardingPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#name DataOciFleetAppsManagementOnboardingPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#values DataOciFleetAppsManagementOnboardingPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_onboarding_policies#regex DataOciFleetAppsManagementOnboardingPolicies#regex}.

---

### DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection <a name="DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection: dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection = { ... }
```


### DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems <a name="DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems: dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementOnboardingPoliciesFilterList <a name="DataOciFleetAppsManagementOnboardingPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter">DataOciFleetAppsManagementOnboardingPoliciesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementOnboardingPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter">DataOciFleetAppsManagementOnboardingPoliciesFilter</a>[]

---


### DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference <a name="DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter">DataOciFleetAppsManagementOnboardingPoliciesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementOnboardingPoliciesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesFilter">DataOciFleetAppsManagementOnboardingPoliciesFilter</a>

---


### DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList <a name="DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference <a name="DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.statements">statements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems">DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `statements`<sup>Required</sup> <a name="statements" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.statements"></a>

```typescript
public readonly statements: string[];
```

- *Type:* string[]

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems">DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItems</a>

---


### DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList <a name="DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference <a name="DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementOnboardingPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList">DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection">DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList">DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementOnboardingPolicies.DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection">DataOciFleetAppsManagementOnboardingPoliciesOnboardingPolicyCollection</a>

---



